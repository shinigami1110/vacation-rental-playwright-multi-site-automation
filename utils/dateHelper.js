/**
 * Dynamic Date Generator Helper
 * Generates future check-in and check-out dates dynamically.
 */

class DateHelper {
  /**
   * Get future dates object
   * @param {number} daysFromToday Check-in offset from today (default: 14 days)
   * @param {number} durationStay Duration of stay in nights (default: 4 nights)
   */
  static getFutureDates(daysFromToday = 14, durationStay = 4) {
    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + daysFromToday);

    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + durationStay);

    const formatISO = (date) => date.toISOString().split('T')[0];
    const formatUS = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const formatDisplay = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const getDayNumber = (date) => date.getDate();
    const getMonthYear = (date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return {
      checkIn: {
        dateObj: checkIn,
        iso: formatISO(checkIn),
        us: formatUS(checkIn),
        display: formatDisplay(checkIn),
        day: getDayNumber(checkIn),
        monthYear: getMonthYear(checkIn)
      },
      checkOut: {
        dateObj: checkOut,
        iso: formatISO(checkOut),
        us: formatUS(checkOut),
        display: formatDisplay(checkOut),
        day: getDayNumber(checkOut),
        monthYear: getMonthYear(checkOut)
      },
      nights: durationStay
    };
  }
}

module.exports = DateHelper;
