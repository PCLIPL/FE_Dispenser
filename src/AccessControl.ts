import { newModel, StringAdapter } from "casbin";

export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow)) && !some(where (p.eft == deny))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
p, defmaker, posts, (list)|(create)
p, defmaker, posts/*, (edit)|(show)|(delete)
p, defmaker, posts/*, field  

p, defmaker, users, (list)|(create)
p, defmaker, users/*, (edit)|(show)|(delete)

p, defmaker, categories, (list)|(create)
p, defmaker, categories/*, (edit)|(show)|(delete)

p, transportcompany, posts, (list)|(create)
p, transportcompany, posts/*, (edit)|(show)
p, transportcompany, posts/hit, field, deny

p, transportcompany, categories, list

p, pumpowner, posts, (list)|(create)
p, pumpowner, posts/*, (edit)|(show)|(delete)
p, pumpowner, posts/*, field

p, fleetowner, posts, (list)|(create)
p, fleetowner, posts/*, (edit)|(show)|(delete)
p, fleetowner, posts/*, field

`);