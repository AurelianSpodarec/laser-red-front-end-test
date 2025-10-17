import Image, { IImageProps } from "../atoms/Image";

type ISingleTestimonialProps = {
  quote: string;
  author: string;
  role?: string;
  image: IImageProps;
  className?: string;
};

function SingleTestimonial({ quote, author, role, image, className = "" }: ISingleTestimonialProps) {
  return (
    <figure className={`relative gradient-primary gradient-size gradient-animated rounded-lg lg:h-[510px] ${className}`}>
      <div style={{ backgroundImage: "url('/graphics/pattern.png')" }} className="bg-center bg-size-[200%] flex flex-col lg:flex-row lg:gap-16 h-full">

        <div className="flex flex-col h-full p-12 pb-10 gap-28 lg:gap-0">
          <blockquote>
            <p className="text-h2-lg text-[#02252C]">{quote}</p>
          </blockquote>
          <figcaption className="text-[#02252C] mt-auto">
            <cite className="block text-[16px] font-bold not-italic">{author}</cite>
            {role && <span className="block">{role}</span>}
          </figcaption>
        </div>

        <div className="p-4 lg:p-2.5">
          <Image
            className="w-full lg:w-auto object-cover h-[260px] lg:h-full lg:min-w-[350px]"
            src={image.src}
            alt={image.alt || `Portrait of ${author}`}
          />
        </div>

      </div>
    </figure>
  );
}

export default SingleTestimonial;
