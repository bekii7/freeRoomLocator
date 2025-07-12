import moment from 'moment';

export function getCurrentAndNextHourTime(periods: number, selectedDate: Date | null | undefined) {
    const availableHours: string[] = [];
    const actualNow = new Date(); // Get the actual current date and time

    // Handle selectedDate being null or undefined early
    if (!selectedDate) {
        return [];
    }

    // Define fixed daily bounds based on the selectedDate
    const startBound = new Date(selectedDate);
    startBound.setHours(8, 30, 0, 0); // 8:30 AM on the selected day

    const endBound = new Date(selectedDate);
    endBound.setHours(17, 30, 0, 0); // 5:30 PM on the selected day

    // Define the break period for the selectedDate
    const breakStartTime = new Date(selectedDate);
    breakStartTime.setHours(12, 30, 0, 0); // 12:30 PM

    const breakEndTime = new Date(selectedDate);
    breakEndTime.setHours(13, 30, 0, 0); // 1:30 PM

    let currentIterationTime: Date;
    let effectiveEndBound: Date; // This variable will determine the actual end time for generating slots

    // Check if the selected date is the actual current day
    const isToday = selectedDate.getDate() === actualNow.getDate() &&
                     selectedDate.getMonth() === actualNow.getMonth() &&
                     selectedDate.getFullYear() === actualNow.getFullYear();

    if (isToday) {
        // If it's today, determine starting time based on actualNow
        if (actualNow.getTime() < startBound.getTime()) {
            // If current time is before 8:30 AM, start from 8:30 AM
            currentIterationTime = new Date(startBound);
        } else if (actualNow.getTime() >= endBound.getTime()) {
            // If current time is already past or at 5:30 PM, no slots available today
            return [];
        } else {
            // If within the window, snap to the next relevant half-hour
            currentIterationTime = new Date(actualNow); // Start with current actual time
            const currentMinutes = currentIterationTime.getMinutes();
            if (currentMinutes < 30) {
                currentIterationTime.setMinutes(30, 0, 0);
            } else {
                // If currentMinutes >= 30, move to the next hour and set minutes to 30
                currentIterationTime.setHours(currentIterationTime.getHours() + 1, 30, 0, 0);
            }
        }
        effectiveEndBound = endBound; // For today, slots are available until 5:30 PM
    } else {
        // If it's a future day
        currentIterationTime = new Date(startBound); // Always start from 8:30 AM on selectedDate
        // Set the specific end bound for future days to 11:30 AM
        effectiveEndBound = new Date(selectedDate);
        effectiveEndBound.setHours(17, 30, 0, 0); // For non-today, slots are only available until 11:30 AM
    }

    // Final check: if after determining starting time, it has gone past the effective end bound
    if (currentIterationTime.getTime() >= effectiveEndBound.getTime()) {
        return [];
    }

    const slotDurationInMinutes = periods === 1 ? 60 : (periods === 2 ? 120 : 0);

    if (slotDurationInMinutes === 0) {
        return [];
    }

    // Loop to populate availableHours
    let tempTime = new Date(currentIterationTime); // Use a temporary variable for iteration
    while (tempTime.getTime() < effectiveEndBound.getTime()) {
        let potentialSlotEndTime = new Date(tempTime);
        potentialSlotEndTime.setMinutes(tempTime.getMinutes() + slotDurationInMinutes);

        // If the potential slot's end time exceeds the overall effective end bound, stop.
        if (potentialSlotEndTime.getTime() > effectiveEndBound.getTime()) {
            break;
        }

        // Check if the current slot completely avoids the break
        const isBeforeBreak = potentialSlotEndTime.getTime() <= breakStartTime.getTime();
        const isAfterBreak = tempTime.getTime() >= breakEndTime.getTime();

        if (isBeforeBreak || isAfterBreak) {
            // If the slot is entirely before the break or entirely after the break, add it
            availableHours.push(`${moment(tempTime).format('h:mm A')}-${moment(potentialSlotEndTime).format('h:mm A')}`); // Added 'h:mm A' format
            tempTime.setMinutes(tempTime.getMinutes() + slotDurationInMinutes); // Move to next slot
        } else {
            // If the slot overlaps with or falls within the break, skip this slot
            // and jump tempTime past the break for the next iteration
            tempTime.setTime(breakEndTime.getTime());
            // Ensure tempTime is still valid for the loop after jumping
            if (tempTime.getTime() >= effectiveEndBound.getTime()) {
                break; // Break loop if jumping went past effective end
            }
        }
    }

    return availableHours;
}

export function formatDateForDateInput(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;}