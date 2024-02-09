import Card from "./Card";

const WhyWeAreBest = () => {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-3xl text-blue-900 font-bold mb-6">Why We Are the Best</h1>
        <div className="flex justify-center">
          <Card
            imageSrc="https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
            title="Rapid Development"
            description="Tailwind CSS's utility-first approach enables developers to rapidly build user interfaces without writing custom CSS. This speeds up development time significantly."
          />
          <Card
            imageSrc="https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
            title="Highly Customizable"
            description="Tailwind CSS provides a highly customizable design system through its extensive set of utility classes. Developers can easily tweak styles without the need for writing additional CSS."
          />
          <Card
            imageSrc="https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
            title="Scalability"
            description="Whether it's a small project or a large-scale application, Tailwind CSS scales effortlessly. Its modular approach ensures consistency and maintainability across projects of any size."
          />
        </div>
      </div>
    );
  };
  
  export default WhyWeAreBest;