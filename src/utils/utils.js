export const formatDateTime = (dateTimeStr) => {
    // Create a Date object from the input string
    const date = new Date(dateTimeStr);
  
    // Define options for formatting
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
  
    // Format the date to a human-readable string
    const formattedDate = date.toLocaleString('en-GB', options);
  
    // Modify the formatted string to include 'th' for the day
    const day = date.getDate();
    const suffix = day === 1 || day === 21 || day === 31 ? 'st' :
                   day === 2 || day === 22 ? 'nd' :
                   day === 3 || day === 23 ? 'rd' : 'th';
    
    const formattedWithSuffix = formattedDate.replace(/(\d{2})/, `$1${suffix}`);
    
    return formattedWithSuffix;
  }