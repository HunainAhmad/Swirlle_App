type UserLocation = {
  latitude: number;
  longitude: number;
};

type UserStore = {
  location: UserLocation | null;
  setLocation: (location: UserLocation | null) => void;
  getState: () => UserStore;
};

const userStore: UserStore = {
  location: null,
  setLocation: (location: UserLocation | null) => {
    userStore.location = location;
  },
  getState: () => userStore,
};

export const useUserStore = userStore;
