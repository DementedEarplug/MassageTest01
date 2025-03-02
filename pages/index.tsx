import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Massage Therapist Business Website</title>
        <meta name="description" content="Professional massage therapy services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Beautyglow</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>About Us</li>
              <li>Our Features</li>
              <li>Testimonials</li>
              <li>
                <button className="bg-white text-black px-4 py-2 rounded-full">
                  Register  
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <section className="p-8 flex">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold mb-4">
              Max Your Beauty<br/> 
              With Our Best<br/>
              Service
            </h2>
            <p className="text-gray-400 mb-8">
              We provide beauty and treatment services with our best quality
            </p>

            <div className="flex space-x-8 mb-8">
              <div>
                <div className="text-5xl font-bold">80k+</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold">130+</div>
                <div className="text-gray-400">Spas Available</div>
              </div>
              <div>
                <div className="text-5xl font-bold">95</div>
                <div className="text-gray-400">Supported Country</div>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full text-lg">
              Discover More
            </button>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <Image 
                src="/woman-towel.jpg"
                alt="Woman with towel"
                width={500}
                height={600}
                className="rounded-xl"
              />
              <div className="absolute top-0 left-0 m-4 p-4 bg-white text-black rounded-xl">
                <p className="font-bold">What Our Beloved<br/> Customers Say About<br/> Our Services</p>
                <div className="flex items-center mt-4">
                  <Image 
                    src="/avatar.jpg"
                    alt="Customer avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="ml-2">
                    I always go here for my treatment and massage service. I have to many times now and it is perfect service.
                    <br/>
                    - Mella Jahovichi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-black p-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Professional Spa <br/>
            and Beauty Service, <br/> 
            Affordable, and <br/>
            Awesome.
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We have the best spa experience that guarantees and will make you come back for more of our services.
          </p>
          <div className="text-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg">
              Discover More
            </button>
          </div>
        </section>

        <section className="p-8 grid grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl text-center">
            <Image 
              src="/treatment1.jpg"
              alt="Treatment 1"
              width={300}
              height={200}
              className="rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Laser Facial Treatments</h3>
            <p className="text-gray-400">$219.99</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl text-center">
            <Image 
              src="/treatment2.jpg"
              alt="Treatment 2" 
              width={300}
              height={200}
              className="rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Massage & Hair Washing</h3>
            <p className="text-gray-400">$99.50</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl text-center">
            <Image 
              src="/treatment3.jpg"
              alt="Treatment 3"
              width={300} 
              height={200}
              className="rounded-xl mb-4" 
            />
            <h3 className="text-2xl font-bold mb-2">Herbal Mask Therapy</h3>
            <p className="text-gray-400">$270.00</p>
          </div>
        </section>
      </main>
    </>
  )
}
