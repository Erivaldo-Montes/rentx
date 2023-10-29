declare namespace ReactNavigation {
  export interface RootParamList {
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: undefined;
    ConfirmScreen: {
      title: string;
      message: string;
      nextScreenRoute: "SignIn" | "Home";
    };
    Home: undefined;
    CarDetails: { carId: string };
    Scheduling: undefined;
    ResumeRent: undefined;
  }
}
