import HomeScreen from "../containers/Account/Home";
import PlanScreen from "../containers/Plan";
import FolkScreen from "../containers/Folk";

import SettingScreen from "../containers/Account/Setting";


//我的 stack 配置
export const HomeConfig={
    Home:HomeScreen,
    Setting:SettingScreen
}

// 计划 stack 配置
export const PlanConfig = {
    Plan: PlanScreen
}

// 社区 stack 配置
export const FolksScreen = {
    Folks: FolkScreen
}

