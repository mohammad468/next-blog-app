import Image from "next/image";
import Link from "next/link";

const styles = {
  imageWrapper: "relative aspect-video overflow-hidden rounded-md mb-6",
  image: "object-cover object-center hover:scale-110 transition-all duration-300 ease-out",
};

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className={styles.imageWrapper}>
      <Link href={`/blogs/${slug}`}>
        <Image fill src={coverImageUrl} className={styles.image} alt={title} />
      </Link>
    </div>
  );
}

export default CoverImage;
