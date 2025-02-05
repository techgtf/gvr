import * as CONFIG from "../../../../config";

const WorkCulture = () => {
  return (
    <section className="lg:max-w-[79%] max-w-[85%] py-[50px] mb-[40px] max-w-[100%] m-auto">
      <h3 className="sectionHeading border-b-[1px] pb-[30px] xl:mb-[60px] mb-[30px]  tracking-[5px] text-black midlandfontmedium">
        OUR TEAM
      </h3>
      <div className="flex  flex-wrap justify-between ">
        <div className="text-justify text-[#333333AB] xl:basis-[29%] basis-[100%] text-[15px] font-[500]">
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
        <div className="flex  xl:basis-[68%] basis-[100%] mt-[20px] xl:mt-[0px]  justify-between flex-col xl:flex-row">
          <img
            src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-1.png`}
            alt="img-1"
            className="xl:w-[65%] w-[100%] h-[auto]"
          />
          <div className="xl:w-[32%] w-[100%] flex xl:flex-col xl:mt-0 mt-[20px] flex-row justify-between">
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-2.png`}
              alt="img-2"
              className="h-[160px] 2xl:[147px] xl:w-[100%] w-[47%] object-cover"
            />
            <img
              src={`${CONFIG.ASSET_IMAGE_URL}/frontend/images/career/culture-3.png`}
              alt="img-3"
              className="h-[160px] 2xl:h-[150px] w-[47%] xl:w-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
