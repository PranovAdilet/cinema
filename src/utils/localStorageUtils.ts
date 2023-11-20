const userValue = localStorage.getItem('users');
export const newStatus = userValue !== null ? 'gold' : 'free'