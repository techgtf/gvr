import * as CONFIG from "../../../../config";

const WorkCulture = () => {
  return (
    <section className="lg:max-w-[79%] py-[50px] max-w-[100%] m-auto">
      <h3 className="sectionHeading border-b-[1px] pb-[20px] mb-[20px] tracking-[5px] text-black midlandfontmedium">
        OUR TEAM
      </h3>
      <div>
        <div className="text-justify text-[#333333AB] text-[15px] font-[500]">
          <p className="text-justify">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <br />
          <p className="text-justify">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex ">
          <img
            src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-1.png`}
            alt="img-1"
          />
          <div>
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-2.png`}
              alt="img-2"
            />
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-3.png`}
              alt="img-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
