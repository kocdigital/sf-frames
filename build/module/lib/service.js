export function setTheme(isDark) {
    const main = document.getElementById('main_content');
    if (isDark) {
        const darkers = main?.querySelectorAll('.theme--dark') || [];
        darkers.forEach(x => {
            x.classList.remove('theme--dark');
            x.classList.add('theme--light');
        });
    }
    else {
        const darkers = main?.querySelectorAll('.theme--light') || [];
        darkers.forEach(x => {
            x.classList.remove('theme--light');
            x.classList.add('theme--dark');
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsUUFBUSxDQUFDLE1BQWM7SUFDckMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVyRCxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sT0FBTyxHQUFHLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNKO1NBQU07UUFDTCxNQUFNLE9BQU8sR0FBRyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMifQ==