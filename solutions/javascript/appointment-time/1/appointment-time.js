// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
    const appointment = new Date(now);
    appointment.setDate(appointment.getDate() + days);
    return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
    return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
    const date = new Date(timestamp);
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
    const appointment = new Date(timestamp);
    
    if (options.hasOwnProperty('year')) {
        appointment.setFullYear(options.year);
    }
    if (options.hasOwnProperty('month')) {
        appointment.setMonth(options.month);
    }
    if (options.hasOwnProperty('date')) {
        appointment.setDate(options.date);
    }
    if (options.hasOwnProperty('hour')) {
        appointment.setHours(options.hour);
    }
    if (options.hasOwnProperty('minute')) {
        appointment.setMinutes(options.minute);
    }

    return {
        year: appointment.getFullYear(),
        month: appointment.getMonth(),
        date: appointment.getDate(),
        hour: appointment.getHours(),
        minute: appointment.getMinutes()
    }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
    const timeEnSecondeA = new Date(timestampA).getTime() / 1000;
    const timeEnSecondeB = new Date(timestampB).getTime() / 1000;
    return Math.round(timeEnSecondeB - timeEnSecondeA);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
    const appointment = new Date(appointmentTimestamp);
    const current = new Date(currentTimestamp);
    return (appointment > current);
}
