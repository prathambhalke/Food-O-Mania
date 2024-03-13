import Image from 'next/image';

export default function Community() {
  return (
    <>
      <header className="">
        <h1>
          One shared passion: <span className="">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="">
        <h2>Community Perks</h2>

        <ul className="">
          <li>
            <Image src="" alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src="" alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src=""
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}