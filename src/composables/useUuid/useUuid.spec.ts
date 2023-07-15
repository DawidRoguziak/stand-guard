import {describe, it ,expect} from "vitest";
import useUuid from "@/composables/useUuid/useUuid";

describe("useUuid", () => {
    it("should has uuid as value", () => {
        const uuid = useUuid();
        expect(uuid.value).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/);
    });
})