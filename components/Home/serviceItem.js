import {
  IoBarChartOutline,
  IoPhonePortraitOutline,
  IoSchoolOutline,
} from "react-icons/io5";

const ServiceItem = ({ title = null, Icon = null, desc = null }) => {
  const returnIcon = (size, color) => {
    switch (Icon) {
      case "BarChart":
        return <IoBarChartOutline size={size} color={color} />;
      case "Phone":
        return <IoPhonePortraitOutline size={size} color={color} />;
      case "School":
        return <IoSchoolOutline size={size} color={color} />;
      default:
        null;
        break;
    }
  };
  return (
    <div className="col-md-4">
      <div className="service-item text-center">
        <div className="services-icon">{returnIcon(35, "white")}</div>
        <h4 className="service-title">{title}</h4>
        <p className="service-description">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
