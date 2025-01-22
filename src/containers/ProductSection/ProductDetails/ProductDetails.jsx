import Railway from "../ProductCategory/Railway";
import Defence from "../ProductCategory/Defence";
import LCV from "../ProductCategory/LCV";
import Mining from "../ProductCategory/Mining";
import Tractor from "../ProductCategory/Tractor";
import Towing from "../ProductCategory/Towing";
import Others from "../ProductCategory/Others";

const productDetails = [
  ...Railway,
  ...Defence,
  ...LCV,
  ...Mining,
  ...Tractor,
  ...Towing,
  ...Others,
];

export default productDetails;
