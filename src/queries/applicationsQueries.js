export const GET_APPLICATIONS = `
query Applications {
  applications {
    data {
      id
      attributes {
        Status
        bike {
          data {
            attributes {
              Manufacturer
              Model
              PlateNumber
              RegistrationNumber
              createdAt
            }
            id
          }
        }
        card {
          data {
            attributes {
              ActiveDate
              CurrentStatus
              ExpirationDate
              ownerships {
                data {
                  attributes {
                    family {
                      data {
                        attributes {
                          FamilyName
                        
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
  `;
