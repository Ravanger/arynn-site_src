const NoScript = () => (
  <noscript>
    <p
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 0,
        margin: 0,
        zIndex: 1000,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontSize: "1.2rem",
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        textAlign: "center",
      }}
    >
      Please enable Javascript to interact with this website
    </p>
  </noscript>
)

export default NoScript
