function getAvifSource(src) {
  return src.endsWith(".webp") ? src.replace(/\.webp$/i, ".avif") : null;
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  wrapperClassName = "responsive-picture",
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes
}) {
  const avifSrc = getAvifSource(src);

  return (
    <picture className={wrapperClassName}>
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
