import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="header">
        <Header
          title="TRAVEL"
          link1="Destination"
          link2="Promotions"
          link3="About"
        />
      </div>
      <div className="card-container">
        <Card
          title="Dobra Voda, Montenegro"
          description="Enjoy true connection with nature, the atmosphere of relaxation and peace with beautiful panoramic views,both the beautiful Adriatic Sea and the mountain landscape ."
          price={80}
          img="https://a0.muscache.com/im/pictures/690adec1-2177-4218-bc4a-a1a43d33178e.jpg?im_w=720"
        />
        <Card
          title="Agia Triada,, Greece"
          description="Luxurious Private Bungalow amid the Sea and the sunny Sky. "
          price={120}
          img="https://a0.muscache.com/im/pictures/28a19481-0865-42a2-ac23-101c586cb12a.jpg?im_w=720"
        />
        <Card
          title="Durrës, Albania"
          description="Enjoy a stylish experience at this centrally-located place with panoramic sea view. The apartment has modern furniture and a breathtaking view of the sea. "
          price={136}
          img="https://a0.muscache.com/im/pictures/miso/Hosting-645648098724784140/original/3b032889-b615-45aa-9f1d-5e520668b478.jpeg?im_w=720"
        />
        <Card
          title="Perea, Greece"
          description="A brand new, ultra luxurious and comfortable apartment (105sqm+27sqm balcony), two bedrooms, on the third floor (penthouse), of a modern building with private parking and an elevator, only 5 steps from the sea. aaaaaaa aaaaaaaaaa"
          price={80}
          img="https://a0.muscache.com/im/pictures/31359ad2-d125-449b-92c1-27df3e0b0e39.jpg?im_w=720"
        />
        <Card
          title="Platanias, Greece"
          description="The view is breathtaking, the sound of the waves and the colours of each sunset will recharge your batteries and relax your mind."
          price={108}
          img="https://a0.muscache.com/im/pictures/miso/Hosting-50987998/original/081065b6-c360-4d97-95e7-11d276473e0b.jpeg?im_w=720"
        />
      </div>
    </>
  );
}

export default App;
