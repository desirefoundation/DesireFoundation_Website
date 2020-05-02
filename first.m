clc;
clear all;
close all;
n=linspace(0,1,1000);
x=sin(2*pi*25*n);
f_rng=50;
f= -f_rng:0.001:f_rng;
for i=1:length(f)
     x_f(i)= trapz(n,x.*exp(-i*2*pi*f(i)*n));
end
plot(f,abs(x_f.^2);
xlabel('Time');
ylabel('Amplitude');
title('Energy Spectral Density');
legend('1804593')