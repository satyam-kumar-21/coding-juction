const Card = ({ imageSrc, title, description }) => {
    return (
      <div className="flex flex-col max-w-sm bg-white shadow-2xl rounded-lg overflow-hidden mr-4">
        <img className="w-full h-48 object-cover object-center" src={imageSrc} alt={title} />
        <div className="p-4">
          <h2 className="text-lg text-blue-700 font-bold mb-2">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    );
  };


export default Card;