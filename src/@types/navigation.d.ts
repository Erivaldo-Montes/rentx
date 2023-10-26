declare namespace ReactNavigation {
  export interface RootParamList {
    SignIn: undefined;
    SignUpFirstStep: undefined;
    SignUpSecondStep: undefined;
    ConfirmScreen: {
      title: string;
      message: string;
      nextScreenRoute: "signIn";
    };
    Home: undefined;
    CarDetails: { carId: string };
  }
}
