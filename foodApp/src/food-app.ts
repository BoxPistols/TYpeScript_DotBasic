class Score {}
class Food {
  constructor(public element: HTMLDivElement) {}
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food')
  console.log(elements);
}
