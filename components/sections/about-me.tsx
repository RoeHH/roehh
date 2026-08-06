export function AboutMe() {
  const age = Math.floor(
    (new Date(Date.now()).getTime() - new Date("08/20/2005").getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  );
  const infos = [
    {
      start: 4,
      end: 7,
      lable: "Dance",
      column: 1,
    },
    {
      start: 7,
      lable: "Handball",
      column: 1,
    },
    {
      start: 6,
      lable: "Jubla",
      column: 2,
    },
    {
      start: 12,
      lable: "mtg",
      column: 3,
    },
    {
      start: 14,
      lable: "Code",
      column: 4,
    },
    {
      start: 17,
      lable: "D&D",
      column: 5,
    },
  ];
  return (
    <>
      <section id="About Me" class="page about-page">
        <div class="about">
          <div class="column">
            <h1 class="header-text">Rouven Hänggi</h1>
            <div class="slide-down-container">
              <div id="slide-down" class="slide-down-content">
                <div class="time-line">
                  <div
                    class="time-line-line"
                    style={`grid-row: 1 / ${age + 2};`}
                  >
                  </div>
                  {Array(age + 1)
                    .fill(null)
                    .map((_, i) => (
                      <p class="time-line-age" style={`grid-row: ${i + 1};`}>
                        {i}
                      </p>
                    ))}
                  <p
                    class="time-line-age mobile"
                    style={`grid-row: ${age + 2};`}
                  >
                  </p>
                  {infos.map(({ start, end, column, lable }) => (
                    <div
                      style={`grid-row: ${start + 2} / ${
                        end ? end + 2 : age + 2
                      }; margin-left: ${column * 30}px;`}
                      class="time-span time-span-with-end"
                    >
                      <p class="time-span-label">{lable}</p>
                    </div>
                  ))}
                </div>
                <div class="relative">
                  <ul>
                    <li>{age} Years</li>
                    <li>Ruswil, Switzerland</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
