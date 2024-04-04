import React from "react";
import Xdimg from "@/imgs/icons/3D.png";
import Vector from "@/imgs/Vector.png";
import Attention from "@/imgs/icons/attention.svg";
import Halfed from "@/imgs/halfed.jpg";
import Doc1 from "@/imgs/doc1.jpeg";
import Doc2 from "@/imgs/doc2.jpeg";
import Doc3 from "@/imgs/doc3.jpeg";
import Image from "next/image";

function DetailedProfile() {
  return (
    <section className="px-5 mb-32 xl:px-24 sm:px-16 pt-32 text-sm md:text-base">
      <div className=" mb-6">
        <p>{ProfileDoc[0]}</p>
        <p className="mt-9">{ProfileDoc[1]}</p>
      </div>
      <div className="relative flex flex-col md:flex-row flex-wrap gap-10 py-10 border-b border-white/30 items-center">
        <div className="relative h-52 w-full lg:max-w-[450px] ">
          <Image
            className="h-full w-full object-cover object-top rounded-xl"
            src={Halfed}
            fill={true}
            sizes="100%"
            alt="<NAME>"
          />
          <div className="absolute top-1/3 -right-4">
            <Image src={Vector} alt="Vector" />
          </div>
        </div>
        <div>
          <h1 className="max-w-lg text-2xl md:text-5xl relative">
            Accomplished, passionate and dedicated Senior Consultant
            <div className="absolute sm:-right-10 right-2 bottom-0 h-12 lg:h-16 w-auto">
              <Image
                className="h-full w-full dark:invert-0 invert"
                src={Attention}
                alt="Icon"
              />
            </div>
          </h1>
        </div>
        <div className="relative mx-auto lg:absolute lg:top-0 lg:right-0">
          <Image src={Xdimg} alt="3D" />
        </div>
      </div>
      <div>
        <p className="mt-6">{ProfileDoc[2]}</p>
        <p className="mt-9">{ProfileDoc[3]}</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 gap-10 mb-40 sm:mb-28 items-center">
        <div className="sm:order-2 grid lg:grid-cols-3 gap-3 lg:max-h-[440px]">
          <div className="sm:h-full md:max-h-full h-96 lg:max-h-[440px] lg:col-span-2 bg-white rounded-xl overflow-hidden">
            <Image
              className="w-full h-full object-cover object-top"
              src={Doc1}
              alt=""
            />
          </div>
          <div className="flex justify-between flex-row lg:col-span-1 lg:flex-col gap-3">
            <div className="w-full h-40 grow rounded-tr-3xl rounded-bl-3xl overflow-hidden">
              <Image
                className="w-full h-full object-cover object-top"
                src={Doc2}
                alt="Isimeme"
              />
            </div>
            <div className="w-full h-40 grow rounded-tl-3xl rounded-br-3xl overflow-hidden">
              <Image
                className="w-full h-full object-cover object-top"
                src={Doc3}
                alt="Isimeme"
              />
            </div>
          </div>
        </div>
        <div className="sm:order-1">
          <p>{ProfileDoc[4]}</p>
          <h5 className="relative mt-14 text-sm tracking-wide flex items-center gap-3">
            Isimeme Whyte{" "}
            <span className="inline-block w-1/2 h-px bg-black dark:bg-white/40 after:absolute after:h-3 after:w-3 after:rounded-full after:bg-primary after:bottom-1" />
          </h5>
        </div>
      </div>
    </section>
  );
}

export default DetailedProfile;

export const ProfileDoc = [
  " Isimeme Whyte is a social impact entrepreneur, entrepreneurship development specialist and purpose clarity coach whose work cuts across many youth, girl-child and women initiatives in various sectors including socioeconomic development programs for women and youths, community development, girl child rights, migrant rehabilitation and reintegration and human trafficking, education, leadership and public service, local content development initiatives, and so on. Isimeme has over 18 years extensive experience in government/NGO partnerships, entrepreneurship, community advocacy and engagement, leveraging technology to promote growth of MSMEs and women-led businesses through trainings and consultancy on digital marketing, graphics design, product photography and e-commerce, market systems development, project management, case/crisis management, research monitoring and evaluation, counselling and mentoring, as well as in institutions and community-based organisations that provide services to young people.",
  "Isimeme Whyte has served in various capacities in the private and public sector. She was the immediate past Executive Secretary of the Esan-West LGA Council of Edo state, former Social Accountability Officer for the World Bank SEEFOR project in Edo State, former Senior Special Assistant to the Governor on World Bank Projects where she oversaw World Bank projects in the state, and former Special Assistant to the Governor on NGOs under which she founded the Conference of NGOs (CONGOs).",
  " Isimeme Whyte is the initiator of several youth-focused volunteer initiatives and programs and was a Youth Ambassador for the British Council’s Belongings Africa Project in 2007. She is a graduate of Girls Power Initiative (GPI, Benin), Kudirat Initiative for Democracy’s (KIND) KUDRA program and LEAP (Leadership, Effectiveness, Accountability & Professionalism) Africa. She is the founder of Genius Hub, a social enterprise and Chairperson on the board of Genius Hub Global Initiative. She is the initiator of the CEOs’ Meeting. Isimeme also serves on the board of the Conference of NGOs (CONGOs) in Edo State and Lady Mechanic Initiative. She is Vice President of Organization of Women in International Trade (OWIT), Nigeria; member of Edo State Exporters Cluster; Coordinator of Edo State Women Entrepreneurship Platform; coordinator of Association of Nigerian Businesswomen Network, Edo state. She is a GOPA certified ICSS (Inspire, Create, Start and Scale) Entrepreneurship Program TFC (Trainer, Facilitator and Coach) and also participated in the Training of Trainers by the International Labour Organisation on ILO’s Cooperative Development Tools (Think.Coop, Start.Coop and My.Coop).",
  "It is worthy of note that Isimeme Whyte has worked on several projects funded by the UK-Cabinet Office, the Department for International Development (DFID) (now the Foreign, Commonwealth and Development Office), Market Development in the Niger Delta (MADE II) Project, the International Organization for Migration, GIZ and the Nigeria-German Cooperation, SOS Children’s Villages Nigeria, ActionAid and BATN Foundation, Coca-Cola Nigeria, the National Agency for Prohibition of trafficking in Persons (NAPTIP), the Edo State Taskforce Against Human Trafficking (ETAHT), the Edo State Skills Development Agency (EdoJobs) and many other organizations with focus on human trafficking and irregular migration, sexual and gender based violence and other trauma related issues providing psychosocial support, reducing youth unemployment through skills and entrepreneurship development, product manufacturing & mass production.",
  "Her work has also been recognised by the UN Women as a woman driving technology and innovations in the technology industry and contributing to the advancement of gender equality and women's empowerment in Nigeria. She has also been recognized by MSME Africa as one of the Top 50 Remarkable MSME Founders in 2023. Through her visionary leadership, Genius Hub has facilitated skills training and entrepreneurship development programs for over 3,500 beneficiaries and counting including youths, women and returned irregular migrants and survivors of human trafficking in Edo state. Genius Hub has also established regional offices in Lagos and Kano states.  Isimeme has a BSc. in Microbiology from the prestigious University of Benin, a certificate in Monitoring and Evaluation from RIPA International, UK and certificates in Project Management, and Policy Development & Advocacy from the University of Washington.",
];
