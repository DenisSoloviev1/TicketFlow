import React from "react";
import { DatePicker, Space } from "antd";
import ruRU from "antd/es/locale/ru_RU"; // Импортируем локализацию для русского языка
import type { PickerLocale } from "antd/es/date-picker/generatePicker"; // Импортируем типы

const locale = {
  lang: {
    ...ruRU, // Используем локализацию для языка
    placeholder: "Выберите дату", // Плейсхолдер для RangePicker
    rangePlaceholder: ["Начальная дата", "Конечная дата"], // Плейсхолдер для диапазона
  },
  timePickerLocale: {
    placeholder: "Выберите время",
  },
};

const { RangePicker } = DatePicker;

export const Calendar: React.FC = () => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        renderExtraFooter={() => "extra footer"}
        locale={locale as PickerLocale} // Устанавливаем локализацию
      />
    </Space>
  );
};
