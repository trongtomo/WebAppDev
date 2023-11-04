export const GET_PARKINGSESSIONS = `
query ParkingSessions {
  parkingSessions {
    data {
      id
      attributes {
        CheckinFaceImage
        CheckinPlateNumberImage
        CheckinTime
        CheckoutFaceImage
        CheckoutPlateNumberImage
        CheckoutTime
        createdAt
        updatedAt
      }
    }
  }
}
`;