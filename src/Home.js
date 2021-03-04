import Banner from "./Banner";
import Card from "./Card";
import Explore from "./ExploreCard";
import "./Header.css";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Banner />
      <h1 className="home__sectionH">Explore nearby</h1>
      <div className="home__exploreNearby">
        <Explore
          src="https://images.pexels.com/photos/3841412/pexels-photo-3841412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Mannheim"
          description="15 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/109630/pexels-photo-109630.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="Berlin"
          description="25 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Frankfurt"
          description="20 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/221519/pexels-photo-221519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Bavaria"
          description="30 minute drive"
        />
      </div>
      <div className="home__exploreNearby">
        <Explore
          src="https://images.pexels.com/photos/258642/pexels-photo-258642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Stuttgart"
          description="24 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/2467210/pexels-photo-2467210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Walldorf"
          description="15 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/3523938/pexels-photo-3523938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Koln"
          description="32 minute drive"
        />
        <Explore
          src="https://images.pexels.com/photos/417120/pexels-photo-417120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Dusseldrof"
          description="10 minute drive"
        />
      </div>
      <h1 className="home__sectionH">Live anywhere</h1>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
