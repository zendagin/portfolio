import {mount} from "@vue/test-utils";
import {describe, expect, test} from 'vitest';
import NavBarTab from "../../components/NavBar/Tab.vue";

describe("NavBarTab", () => {
    test("renders props", () => {
        const label = "prop name";
        const path = "/path";
        const wrapper = mount(NavBarTab, {
            props: {label, path},
        });

        expect(wrapper.attributes().to).toBe(path);
        expect(wrapper.text()).toBe(label);
    });
});