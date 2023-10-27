import Acceleration from "@/assets/acceleration.svg";
import People from "@/assets/people.svg";
import Strength from "@/assets/strength.svg";
import Velocity from "@/assets/speedometer.svg";
import Transmission from "@/assets/transmission.svg";
import Gasoline from "@/assets/gasolinePower.svg";
import Energy from "@/assets/energyPower.svg";
import Hybrid from "@/assets/hybrid.svg";
import Car from "@/assets/car.svg";
import { SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  type: string;
}

export function iconAccessories({ type, ...rest }: Props) {
  switch (type) {
    case "speed":
      return <Velocity {...rest} />;

    case "acceleration":
      return <Acceleration {...rest} />;

    case "speed":
      return <Velocity {...rest} />;

    case "turning_diameter":
      return <Strength {...rest} />;

    case "electric_motor":
      return <Energy {...rest} />;

    case "seats":
      return <People {...rest} />;

    case "exchange":
      return <Transmission {...rest} />;

    case "gasoline_motor":
      return <Gasoline {...rest} />;
    case "hybrid_motor":
      return <Hybrid {...rest} />;
    default:
      return <Car {...rest} />;
  }
}
