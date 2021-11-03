export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-br', { timeZone: 'UTC' });
}

export function formatPhone(phone) {
  const valid = phone.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (valid) {
    return `+${valid[1]} (${valid[2]}) ${valid[3]}-${valid[4]}`;
  }

  return null;
}
