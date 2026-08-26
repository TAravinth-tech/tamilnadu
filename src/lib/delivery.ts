export type DeliveryDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

const STORAGE_KEY = 'tg-delivery';

export const emptyDeliveryDetails: DeliveryDetails = {
  name: '',
  phone: '',
  address: '',
  city: '',
  state: 'Tamil Nadu',
  pincode: '',
};

// Saved separately from the cart so it survives even after an order is
// placed and the cart is cleared — the customer only has to edit it
// next time, not retype it.
export function loadDeliveryDetails(): DeliveryDetails {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyDeliveryDetails;
    return { ...emptyDeliveryDetails, ...JSON.parse(raw) };
  } catch {
    return emptyDeliveryDetails;
  }
}

export function saveDeliveryDetails(details: DeliveryDetails) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(details));
  } catch {
    /* ignore write failures (e.g. storage disabled) */
  }
}
