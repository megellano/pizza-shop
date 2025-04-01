import {
  Container,
  Filters,
  ProductsGoupList,
  TopBar,
} from "@/components/shared";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Cały asortyment" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 pt-8">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGoupList
                key={1}
                categoryId={1}
                title="Pizza"
                items={[
                  {
                    id: 1,
                    name: "Hawajska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 32 }, { price: 55 }],
                  },

                  {
                    id: 2,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 3,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 4,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 5,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 6,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 7,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                ]}
              />
              <ProductsGoupList
                key={2}
                categoryId={2}
                title="Kombo"
                items={[
                  {
                    id: 1,
                    name: "Hawajska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 32 }, { price: 55 }],
                  },

                  {
                    id: 2,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 3,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 4,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 5,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 6,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                  {
                    id: 7,
                    name: "Meksykańska",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    items: [{ price: 22 }, { price: 55 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="h-[300px]"></div> */}
    </>
  );
}
