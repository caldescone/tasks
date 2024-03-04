import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    enum HolidayName {
        Christmas = "Christmas",
        Halloween = "Halloween",
        Birthday = "Birthday",
        Valentines = "Valentines",
        Thanksgiving = "Thanksgiving"
    }

    interface Holiday {
        name: HolidayName;
        emoji: string;
        date: number;
    }

    const holidays: Record<HolidayName, Holiday> = {
        Christmas: {
            name: HolidayName.Christmas,
            emoji: "🎄",
            date: 12.25
        },
        Halloween: {
            name: HolidayName.Halloween,
            emoji: "🎃",
            date: 10.31
        },
        Birthday: {
            name: HolidayName.Birthday,
            emoji: "🎂",
            date: 2.19
        },
        Valentines: {
            name: HolidayName.Valentines,
            emoji: "❤️",
            date: 2.14
        },
        Thanksgiving: {
            name: HolidayName.Thanksgiving,
            emoji: "🦃",
            date: 11.23
        }
    };
    const [holiday, setHoliday] = useState<Holiday>(holidays.Christmas);
    function cycleHolidayAlphabetical(): void {
        const holidayNames = Object.keys(holidays).sort() as HolidayName[];
        const currentIndex = holidayNames.indexOf(holiday.name);
        const nextIndex = (currentIndex + 1) % holidayNames.length;
        setHoliday(holidays[holidayNames[nextIndex]]);
    }
    function cycleHolidayByYear(): void {
        const holidayDates = Object.values(holidays)
            .sort((a, b) => a.date - b.date)
            .map((holiday) => holiday.name);
        const currentIndex = holidayDates.indexOf(holiday.name);
        const nextIndex = (currentIndex + 1) % holidayDates.length;
        setHoliday(holidays[holidayDates[nextIndex]]);
    }
    return (
        <div>
            Holiday: {holiday.emoji}
            <Button onClick={() => cycleHolidayAlphabetical()}>
                Cycle Alphabet Wise
            </Button>
            <Button onClick={() => cycleHolidayByYear()}>
                Cycle Year Wise
            </Button>
        </div>
    );
}
