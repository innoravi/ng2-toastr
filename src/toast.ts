export class Toast {
  id: number;
  constructor(public type: string,
              public message: string,
              public title?: string,
              public uniqueid?: string) {

  }
}

