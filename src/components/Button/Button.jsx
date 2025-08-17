function Button({ onClick, children, className }) {
  const handleRippleClick = (event) => {
    const button = event.currentTarget;

    // Create the ripple element
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Position the ripple where the user clicked
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    // Add the ripple to the button
    button.appendChild(circle);

    // Clean up the ripple element after the animation is done
    setTimeout(() => {
      circle.remove();
    }, 600); // This should match your animation duration

    // If an onClick function was passed, call it after a short delay
    if (onClick) {
      setTimeout(() => {
        onClick();
      }, 400); // A short delay to let the ripple start before navigation
    }
  };

  return (
    <button className={`buttons themed-styling themed-text ${className || ''}`} onClick={handleRippleClick}>
      {children}
    </button>
  );
}

export default Button;
