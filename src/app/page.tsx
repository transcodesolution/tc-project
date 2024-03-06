import Image from "next/image";
import people from "../../public/Assets/people.png"
export default function Home() {
  return (
    <main className="flex items-center justify-center p-4">
      <div>
        <div className="container mx-auto gap-20 flex items-center justify-between">
          <div className="flex gap-5">
            <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
              <h2 className="text-3xl">Who <span className="text-blue">We Are</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <h3 className="leading-10 text-2xl pb-5">MORE THEN 10+ YEARS
                PROVIDE IT SOLUTION</h3>
              <p className="pb-5 text-lg">Our focus is primarily on software development,
                crafting custom solutions that align with our
                clients unique requirements.</p>
              <p className="pb-5 text-lg">Our team of experienced developers works
                closely with each client to their business goals and objectives.</p>
              <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">
                Our Service
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={people}
                height={700}
                width={470}
                alt="Your Name"
                className="pb-4"
              />
            </div>
            <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
              <h2 className="text-3xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <p className="pb-5 text-lg">Welcome to Transcode Solutions– where
                innovation meets excellence.</p>
              <p className="text-lg">
                Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each clients specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable,and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



