import {action, observable} from 'mobx';

/**
 * User store
 */
export class UserStore {
  @observable count = 0;
  @observable activeUser = null;
  @observable users = [
    {
      email: 'user1@gmail.com',
      password: '1234',
      type: 'NOOB',
      name: 'Narendra Noob',
      message: 'Moving ahead like a king 👑 !',
      worked: '6hrs 50mins',
      taskDone: '11/20',
      task: [
        {
          label: 'Redistribution',
          vehicleNo: 'KA-57-AF-7260',
          vehicleName: 'Honda Activa',
          vehicleModel: 'Carnot',
          bookingId: '18877779',
          type: 'redistribution',
        },
        {
          label: 'Redistribution',
          vehicleNo: 'KA-57-AF-7260',
          vehicleName: 'Honda Activa',
          vehicleModel: 'Carnot',
          bookingId: '18877779',
          type: 'redistribution',
        },
      ],
      honors: [
        {text: '5 Stars', type: 'star'},
        {text: '100 Tasks', type: 'trophy'},
        {text: '100 Days', type: 'hand'},
        {text: '5 Stars', type: 'star'},
        {text: '50 Tasks', type: 'hand'},
      ],
    },
    {
      email: 'user2@gmail.com',
      password: '1234',
      type: 'PRO',
      name: 'Narendra Pro',
      message: 'Have a good day 👑 !',
      task: [
        {
          label: 'Bike Pickup',
          vehicleNo: 'KA-57-AF-7260',
          vehicleName: 'Honda Activa',
          vehicleModel: 'Carnot',
          bookingId: '18877779',
          type: 'pickup',
        },
        {
          label: 'Bike Drop',
          vehicleNo: 'KA-57-AF-7260',
          vehicleName: 'Honda Activa',
          vehicleModel: 'Carnot',
          bookingId: '18877779',
          type: 'drop',
        },
      ],
      honors: [],
    },
  ];

  @action setActiveUser(payload): void {
    this.activeUser = payload;
  }

  /** Action which will update count in store */
  @action setCount(count: number): void {
    this.count = count;
  }

  /** Action to increment counter by 1 */
  @action increment(): void {
    this.count = this.count + 1;
    console.warn(this.count);
  }

  /** Action to decrement counter by 1 */
  @action decrement(): void {
    this.count = this.count - 1;
  }
}

export const userStore = new UserStore();
