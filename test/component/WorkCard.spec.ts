import {mount} from "@vue/test-utils";
import {describe, expect, test} from 'vitest';
import WorkCard from "../../components/WorkCard.vue";

describe("WorkCard", () => {
    test("renders props", () => {
        const name = "prop name";
        const url = "https://dummy.com";
        const img = "dummy.jpg";
        const wrapper = mount(WorkCard, {
            props: {name, url, img},
        });


        expect(wrapper.find("h2").text()).toBe(name);
        expect(wrapper.find("img").attributes().src).toBe(img);
        wrapper.findAll("a").forEach(a => {
            expect(a.attributes().href).toBe(url);
        });
    });
});