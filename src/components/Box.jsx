import { useTheme } from "../hooks/useTheme";

export function Box() {
  const { theme, colorSchema, toggleTheme } = useTheme();

  return (
    <div>
      <div
        style={{
          background: theme.background,
          color: theme.color,
          padding: "2rem",
        }}
      >
        I'm using the theme '{colorSchema}' but I can change
      </div>

      <div>
        <button
          onClick={() =>
            colorSchema === "dark" ? toggleTheme("light") : toggleTheme("dark")
          }
          style={{
            background: theme.background,
            color: theme.color,
            padding: "2rem",
            borderRadius: "8px",
            marginTop: "1rem",
            fontSize: "1rem",
            textTransform: "uppercase",
          }}
        >
          Change!
        </button>
      </div>
    </div>
  );
}
