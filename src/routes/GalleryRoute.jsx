import GalleryPage from "../pages/GalleryPage";
import { galleryItems } from "../data/galleryData";

export default function GalleryRoute() {
  return <GalleryPage galleryItems={galleryItems} />;
}
