export const createRippleEffect = (event, color: string) => {
  const targetElement = event.target;

  const circle = document.createElement('span');
  document.styleSheets[0].insertRule(
    '@keyframes ripple {\
        to {\
          transform: scale(4);\
          opacity: 0;\
        }\
      }'
  );
  const diameter = Math.max(targetElement.clientWidth, targetElement.clientHeight);
  const radius = diameter / 2;

  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%';
  circle.style.transform = 'scale(0)';
  circle.style.animation = 'ripple 600ms linear';
  circle.style.backgroundColor = color ? color : 'white';
  circle.style.opacity = '0.7';

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.pageX - targetElement.offsetLeft - radius}px`;
  circle.style.top = `${event.pageY - targetElement.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = targetElement.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  targetElement.appendChild(circle);
};
