import { render, screen } from "@testing-library/react";
import VoteCard from "../voteCard";
import userEvent from "@testing-library/user-event";
import Title from "../title";
import Movie from "../movie";
import NavbarOptions from "../navbarOptions";
import NavbarOption from "../navbarOption";

it("renders a VoteCard", () => {
  render(
    <VoteCard
      rate={7.5}
      voteCount={10}
    />
  );

  const rateElement = screen.getByText("7.5");
  expect(rateElement).toBeInTheDocument();

  const voteElement = screen.getByText("10 Vote");
  expect(voteElement).toBeInTheDocument();
});

it("I am testing movie", () => {
  render(
    <Movie
      title="movie"
      averageVote={7}
      id={1}
      category="popular"
      image="https://source.unsplash.com/TCpfPxKPOvk/200x200"
    />
  );
  const imgElement = screen.getByTestId("#poster") as HTMLImageElement;
  expect(imgElement.src).toMatch(/(source|unsplash)/i);
  const titleElement = screen.getByText("movie");
  expect(titleElement).toBeInTheDocument();
  const linkElement = screen.getByTestId("movie");
  expect(linkElement).toHaveAttribute("href", "movie/popular/1");
}, 10000);

test("displays menu on hover", () => {
  const name = "Example Name";
  const menu = <div>Example Menu</div>;
  render(
    <NavbarOption
      name={name}
      menu={menu}
    />
  );

  const navbarOption = screen.getByText(name);
  expect(screen.queryByText(/Example Menu/i)).not.toBeVisible();

  userEvent.hover(navbarOption);

  const menuElement = screen.getByText(/Example Menu/i);
  expect(menuElement).toBeInTheDocument();
});
