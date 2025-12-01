# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications (F8)":
    - list
  - generic [ref=e4]:
    - generic [ref=e5]:
      - button "Back to Home" [ref=e6] [cursor=pointer]:
        - img
        - text: Back to Home
      - generic [ref=e7]:
        - img "QapitolQA Logo" [ref=e8]
        - generic [ref=e9]: Skill Assist™
      - heading "Welcome to QapitolQA" [level=1] [ref=e10]
      - paragraph [ref=e11]: Sign in to access QapitolQA
    - generic [ref=e14]:
      - generic [ref=e15]:
        - text: Email
        - generic [ref=e16]:
          - img [ref=e17]
          - textbox "Email" [ref=e20]:
            - /placeholder: Enter your email
      - generic [ref=e21]:
        - text: Password
        - generic [ref=e22]:
          - img [ref=e23]
          - textbox "Password" [ref=e26]:
            - /placeholder: Enter your password
          - button [ref=e27] [cursor=pointer]:
            - img
      - button "Sign In" [ref=e28] [cursor=pointer]:
        - img
        - text: Sign In
```