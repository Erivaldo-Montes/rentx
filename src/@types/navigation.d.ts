declare namespace ReactNavigation {
  export interface RootParamList {
    signIn: undefined;
    signUpFirstStep: undefined;
    signUpSecondStep: undefined;
    confirmScreen: {
      title: string;
      message: string;
      nextScreenRoute: "signIn";
    };
    home: undefined;
  }
}
