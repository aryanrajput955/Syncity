import Navbar from "../components/navbar"
import Image from "next/image"

function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-lg border bg-[#EEE6CA] border-[#E5BEB5] hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 pt-6 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-2xl font-bold text-[#896C6C] ${className}`}>
      {children}
    </h3>
  );
}

function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`bg-[#EEE6CA] hover:bg-[#EEE6CA]/90 text-[#896C6C] px-8 py-6 text-lg rounded-md font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-[#EEE6CA]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#896C6C] mb-6">Our Services</h1>
          <p className="text-xl text-[#896C6C]/80 max-w-3xl mx-auto">
            From intimate farm stays to grand destination weddings, we bring your vision to life with the warmth and
            beauty of Uttarakhand.
          </p>
        </div>
      </section>

      {/* Farm Tourism Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#896C6C] mb-6">🌾 Farm Tourism</h2>
              <p className="text-lg text-[#896C6C]/80 mb-8">
                Reconnect with nature through our farm tourism experiences. From rustic stays to farm-fresh meals, we
                offer a unique blend of relaxation and learning.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-[#F5FAE1] border-[#E5BEB5]">
                  <CardHeader>
                    <CardTitle className="text-[#896C6C]">Farm Stays</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#896C6C]/70">Cozy cottages and traditional homestays amidst nature</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F5FAE1] border-[#E5BEB5]">
                  <CardHeader>
                    <CardTitle className="text-[#896C6C]">Agri-Tours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#896C6C]/70">Guided farm walks, fruit picking, organic farming demos</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F5FAE1] border-[#E5BEB5]">
                  <CardHeader>
                    <CardTitle className="text-[#896C6C]">Adventure & Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#896C6C]/70">Tractor rides, bonfire nights, cycling trails, fishing</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F5FAE1] border-[#E5BEB5]">
                  <CardHeader>
                    <CardTitle className="text-[#896C6C]">Wellness & Retreats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#896C6C]/70">Yoga in nature, Ayurvedic treatments, meditation</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="elegant-border">
                <Image
                  src="/peaceful-farm-stay-in-uttarakhand-with-mountain-vi.png"
                  alt="Farm Tourism"
                  width={600}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events Section */}
      <section className="py-20 px-6 bg-[#F5FAE1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative lg:order-1">
              <div className="image-overlap">
                <Image
                  src="/corporate-team-building-event-in-mountain-resort-c.png"
                  alt="Corporate Events"
                  width={600}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-[#896C6C] mb-6">🏢 Corporate Events</h2>
              <p className="text-lg text-[#896C6C]/80 mb-8">
                Transform your corporate gatherings into memorable experiences. Whether it's an annual meeting, team
                retreat, or product launch, our venues ensure perfect work-leisure balance.
              </p>

              <div className="space-y-4">
                <Card className="bg-[#EEE6CA] border-[#E5BEB5]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#896C6C] mb-2">Team Building Activities</h3>
                    <p className="text-[#896C6C]/70">Outdoor challenges, workshops, interactive sessions</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#EEE6CA] border-[#E5BEB5]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#896C6C] mb-2">Conferences & Seminars</h3>
                    <p className="text-[#896C6C]/70">Fully equipped halls with AV setups</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#EEE6CA] border-[#E5BEB5]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#896C6C] mb-2">Offsite Retreats</h3>
                    <p className="text-[#896C6C]/70">Relaxed settings for brainstorming and productivity</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Weddings Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#896C6C] mb-6">💍 Destination Weddings</h2>
            <p className="text-xl text-[#896C6C]/80 max-w-3xl mx-auto">
              Your love story deserves the perfect backdrop. Let the majestic mountains of Uttarakhand witness your
              special day.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="image-overlap">
                <Image
                  src="/scenic-mountain-wedding-venue-with-traditional-dec.png"
                  alt="Venue Options"
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/80 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Venue Options</h3>
                <p className="text-sm opacity-90">Scenic farms, heritage properties, luxury resorts</p>
              </div>
            </div>

            <div className="relative group">
              <div className="image-overlap">
                <Image
                  src="/bohemian-wedding-theme-with-mountain-backdrop.png"
                  alt="Theme Weddings"
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/80 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Theme Weddings</h3>
                <p className="text-sm opacity-90">Rustic, royal, bohemian, or minimal elegance</p>
              </div>
            </div>

            <div className="relative group">
              <div className="image-overlap">
                <Image
                  src="/traditional-indian-pre-wedding-ceremony-mehendi.png"
                  alt="Pre-Wedding Events"
                  width={400}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#896C6C]/80 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Pre-Wedding Events</h3>
                <p className="text-sm opacity-90">Mehendi, sangeet, cocktail parties, haldi ceremonies</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FAE1] p-8 rounded-2xl border-2 border-[#E5BEB5]">
            <h3 className="text-2xl font-bold text-[#896C6C] mb-4 text-center">Complete Wedding Solutions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#896C6C] mb-2">Customized Décor & Planning</h4>
                <p className="text-[#896C6C]/70 mb-4">Tailor-made themes, floral arrangements, stage setups</p>

                <h4 className="font-semibold text-[#896C6C] mb-2">Hospitality & Catering</h4>
                <p className="text-[#896C6C]/70">Farm-to-table menus, traditional cuisines, guest stays</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#896C6C] mb-2">Entertainment & Experiences</h4>
                <p className="text-[#896C6C]/70">Live music, DJs, folk performances, fireworks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#896C6C] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#EEE6CA] mb-6">Let's Plan Your Perfect Event</h2>
          <p className="text-xl text-[#EEE6CA]/90 mb-8">
            Every celebration is unique. Tell us your vision, and we'll make it happen.
          </p>
          <Button className="bg-[#EEE6CA] hover:bg-[#EEE6CA]/90 text-[#896C6C] px-8 py-6 text-lg">
            Start Planning Now
          </Button>
        </div>
      </section>
    </div>
  )
}