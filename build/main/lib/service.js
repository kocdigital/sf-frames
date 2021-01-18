"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTheme = void 0;
function setTheme(isDark) {
    const main = document.getElementById('main_content');
    if (isDark) {
        const darkers = (main === null || main === void 0 ? void 0 : main.querySelectorAll('.theme--dark')) || [];
        darkers.forEach(x => {
            x.classList.remove('theme--dark');
            x.classList.add('theme--light');
        });
    }
    else {
        const darkers = (main === null || main === void 0 ? void 0 : main.querySelectorAll('.theme--light')) || [];
        darkers.forEach(x => {
            x.classList.remove('theme--light');
            x.classList.add('theme--dark');
        });
    }
}
exports.setTheme = setTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFnQixRQUFRLENBQUMsTUFBYztJQUNyQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXJELElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxPQUFPLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZ0JBQWdCLENBQUMsY0FBYyxNQUFLLEVBQUUsQ0FBQztRQUU3RCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLE1BQU0sT0FBTyxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQixDQUFDLGVBQWUsTUFBSyxFQUFFLENBQUM7UUFFOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQztBQWxCRCw0QkFrQkMifQ==