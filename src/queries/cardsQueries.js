export const GET_CARDS = `
query Cards {
  cards {
    data {
      id
      attributes {
        RegistrationNumber
        CurrentStatus
      }
    }
  }
}
`;
